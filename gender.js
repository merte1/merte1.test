var uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

define(['pipAPI', window.koc.sourceBase + '/IAT-TRR.js' + '?r=' + uniqueId()], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Kariyer', //Will appear in the data.
			displayInResultAs: 'Kariyer',
			title : {
				media : {word : 'Kariyer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Kariyer'},
				{word: 'Kuruluş'},
				{word: 'Maaş'},
				{word: 'Ofis'},
				{word: 'Profesyonel'},
				{word: 'Yönetim'},
				{word: 'İşletme'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Aile', //Will appear in the data.
			displayInResultAs: 'Aile',
			title : {
				media : {word : 'Aile'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           		{word: 'Düğün'},
				{word: 'Evlilik'},
				{word: 'Ebeveyn'},
				{word: 'Akrabalar'},
				{word: 'Aile'},
				{word: 'Ev veya yuva'}, 
				{word: 'Çocuklar'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Erkek',
			displayInResultAs: 'Erkeği',
			title : {
				media : {word : 'Erkek'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Emrah'},
				{word: 'Ali'},
				{word: 'Batuhan'},
				{word: 'Mustafa'},
				{word: 'Mehmet'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Kadın',
			displayInResultAs: 'Kadını',
			title : {
				media : {word : 'Kadın'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Kübra'},
				{word: 'Merve'},
				{word: 'Zeynep'},
				{word: 'Gözde'},
				{word: 'Hilal'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
