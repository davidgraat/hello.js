const branch = process.env.GITHUB_REF_NAME;
const rules = [
	{ "type": "breaking", "release": "major" },
	{ "type": "feature", "release": "minor" },
	{ "type": "defect", "release": "patch" },
	{ "type": "issue", "release": "patch" },
	{ "type": "hotfix", "release": "patch" },
];

module.exports = {
	branches: [
		'main', 
		{
			"name": "task-**",
			"prerelease": true
		},
		{
			"name": "feature-**",
			"prerelease": true
	  	},
		{
			"name": "issue-**",
			"prerelease": true
	  	},
		{
			"name": "defect-**",
			"prerelease": true
		},
		{
			"name": "hotifix-**",
			"prerelease": true
		}
	], 
	plugins: branch === 'main' ? [
		[
			'@semantic-release/commit-analyzer', 
			{
				"preset": "angular",
				"releaseRules": rules
		  	}
		],
		[
			'@semantic-release/release-notes-generator',
			{
			        'preset': 'angular',
			        'presetConfig': {
					'types': [
			                 	{
			                 		'type': 'feature',
							"section": "Features"
			              			'hidden': false
			            	  	}
			        	 ]
				}
			}
		],
		"@semantic-release/npm",
		"@semantic-release/github",
		] : [
		[
			'@semantic-release/commit-analyzer', 
			{
				"preset": "angular",
				"releaseRules": rules
			}
		],
		'@semantic-release/release-notes-generator',
		"@semantic-release/npm",
		],
};
