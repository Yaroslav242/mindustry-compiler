function procedure(){

  function notify(text,time = 5){
    removeNote();

    addWidget('div', 'root', {id: 'note', innerHTML:'<p>' +text});
    editWidget({
      id:'note',
      height:'5rem',
      width:'16rem',

      position:'fixed',
      top:'6rem',
      left:'50%',
      right:'50%',
      transform:'translate(-50%, -50%)',

      color:'E0E000',
      background:'#505050',

      'border-radius':'0.5rem',
      'border-color':'#000000',
      'border-width':'1px',
      'border-style':'solid',

      'text-align':'center',

      'z-index':'999',
    });

    addWidget('div', 'note', {id: 'noteButton', innerHTML:'ok'});
    editWidget({
      id:'noteButton',
      height:'1rem',
      width:'3rem',

      position:'absolute',
      left:'50%',
      right:'50%',
      bottom:'-0.5rem',
      transform:'translate(-50%, -50%)',

      color:'E0E000',
      background:'#6A6A6A',

      'border-radius':'0.3rem',
      'border-color':'#000000',
      'border-width':'1px',
      'border-style':'solid',

      'text-align':'center',

      'z-index':'999',
    });
    addListener('noteButton', 'mouseenter', function(key){editWidget({
      id:'noteButton',

      color:'E0E0E0',
    });});
    addListener('noteButton', 'mouseleave', function(key){editWidget({
      id:'noteButton',

      color:'E0E000',
    });});
    addListener('noteButton', 'mousedown', function(key){if(key.buttons ==1){removeNote();}})

    console.log(text);

    setTimeout(removeNote, time * 1000);
  };
  function removeNote(){
    try {
      removeWidget('note');
    }
    catch{
    }
  };
  function alignLabels(){
    labelsLength = getWidget('labels').value.split('\n').length;
    codeLength = getWidget('code').value.split('\n').length;

    if (labelsLength > codeLength) {
      getWidget('labels').value = getWidget('labels').value.split('\n').slice(0, codeLength).join('\n');
    }
    else {
      getWidget('labels').value = getWidget('labels').value + '\n'.repeat(codeLength -labelsLength);
    }
  };
  function dumpSyntax(){
    output = '';

    for (var i = 0; i < translations.length; i++) {
      output += translations[i][0];
      output += ' '.repeat(54 -translations[i][0].length);
      output += translations[i][1];
      output += '\n';
    }

    getWidget('syntaxDump').value = output;
    console.log(output);
  };

  editWidget({
    id:'root',
    height:'100%',
    width:'100%',
    margin:'0px',
    padding:'0px',
  });

  addWidget('div', 'root', {id:'labelContainter'});
  editWidget({
    id:'labelContainter',
    position:'fixed',
    top:'2rem',
    left:'0rem',
    width:'6rem',
    bottom:'0rem',
  });
  addWidget(alias('comment'), 'labelContainter', {id:'labels'});
  editWidget({
    id:'labels',
    height:'100%',
    width:'100%',
    color:'E0E000',
    background:'#30303A',

    resize:'none',
    overflow:'scroll',
    'white-space':'pre',

    outline:'none',
    'border-style':'solid',
    'border-width':'0px',
    'border-color':'#000000',
  });

  addWidget('div', 'root', {id:'centreContainer'});
  editWidget({
    id:'centreContainer',
    position:'fixed',
    top:'2rem',
    left:'6rem',
    right:'14rem',
    bottom:'0rem',
  });
/*	addWidget('div', 'centreContainer', {id:'codeContainer'});
  editWidget({
    id:'codeContainer',
    position:'absolute',
    top:'0rem',
    left:'0rem',
    right:'32rem',
    bottom:'0rem',
  });*/
  addWidget(alias('comment'), 'centreContainer', {id:'code'});
  editWidget({
    id:'code',
    height:'100%',
    width:'50%',
    color:'E0E000',
    background:'#30303A',

    resize:'none',
    overflow:'scroll',
    'white-space':'pre',

    outline:'none',
    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#000000',
  });
  addListener('code','keydown',function(key){alignLabels()});

/*	addWidget('div', 'centreContainer', {id:'syntaxContainer'});
  editWidget({
    id:'syntaxContainer',
    position:'absolute',
    top:'0rem',
    left:'0rem',
    right:'0rem',
    bottom:'0rem'
  });*/
  addWidget(alias('comment'), 'centreContainer', {id:'syntaxDump', readOnly:'true'});
  editWidget({
    id:'syntaxDump',
    position:'absolute',
    right:'0rem',
    height:'100%',
    width:'50%',
    color:'E0E000',
    background:'#30303A',

    resize:'none',
    overflow:'scroll',
    'white-space':'pre',

    outline:'none',
    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#000000',
  });

  addWidget('div', 'root', {id:'warningContainer'});
  editWidget({
    id:'warningContainer',
    position:'fixed',
    top:'2rem',
    width:'14rem',
    right:'0rem',
    bottom:'0rem',
  });
  addWidget(alias('comment'), 'warningContainer', {id:'warnings', readOnly:'true'});
  editWidget({
    id:'warnings',
    height:'100%',
    width:'100%',
    color:'E0E000',
    background:'#30303A',

    resize:'none',
    overflow:'scroll',

    outline:'none',
    'border-style':'solid',
    'border-width':'0px',
    'border-color':'#000000',
  });

  addWidget('div', 'root', {id:'labelsHeader', innerHTML:'Labels'});
  editWidget({
    id:'labelsHeader',
    position:'fixed',
    top:'0px',
    left:'0rem',
    width:'6rem',
    height:'2rem',

    'user-select':'none',

    color:'E0E000',
    background:'#20203A',

    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#000000',
  });

  addWidget('div', 'root', {id:'warningsHeader', innerHTML:'Errors'});
  editWidget({
    id:'warningsHeader',
    position:'fixed',
    top:'0px',
    width:'14rem',
    right:'0rem',
    height:'2rem',

    'user-select':'none',

    color:'E0E000',
    background:'#20203A',

    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#000000',
  });

  addWidget('div', 'root', {id:'codeHeader', innerHTML:'Code'});
  editWidget({
    id:'codeHeader',
    position:'fixed',
    top:'0px',
    left:'6rem',
    width:'9rem',
    height:'2rem',

    'user-select':'none',

    color:'E0E000',
    background:'#20203A',

    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#20203A',
  });

  addWidget('div', 'root', {id:'export', innerHTML:'Export To Clipboard'});
  editWidget({
    id:'export',
    position:'fixed',
    top:'0px',
    left:'15rem',
    width:'12rem',
    height:'2rem',

    'user-select':'none',

    color:'E0E000',
    background:'#20203A',

    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#20203A',
  });
  addListener('export', 'mouseenter', function(key){editWidget({
    id:'export',

    color:'#00F000'
  });});
  addListener('export', 'mouseleave', function(key){editWidget({
    id:'export',

    color:'#F0F000'
  });});
  addListener('export','click',function(key){
    compilerOutput = compile(getWidget('code').value, getWidget('labels').value, translations, aliases);

    errors = '';
    i = 0;
    ii = 0;
    while(ii < compilerOutput.errors.count){
      if(compilerOutput.errors[i]){
        ii++;
        errors += compilerOutput.errors[i] + '\n';
      }
      else{
        errors += '\n';
      }
      i++;
    }

    console.log(compilerOutput.errors);
    getWidget('warnings').value = errors;

    if(errors == ''){
      navigator.clipboard.writeText(compilerOutput.code);
      notify('The code was successfully compiled');
    }
    else {
      notify('Errors interupted compiling');
    }
  });

  addWidget('div', 'root', {id:'filler'});
  editWidget({
    id:'filler',
    position:'fixed',
    top:'0px',
    left:'27rem',
    right:'14rem',
    height:'2rem',

    color:'E0E000',
    background:'#20203A',

    'border-style':'solid',
    'border-width':'1px',
    'border-color':'#20203A',
  });

  dumpSyntax();
  notify('Current syntax translations work for Mindustry V6 and V7', 10);
}

function getWidget(id){
    return document.getElementById(id);
}
function addWidget(widget,root,attributes){
    element = document.createElement(widget);
    for (var key in attributes) {
      element[key] = attributes[key];
    }
    getWidget(root).appendChild(element);
}
function editWidget(properties){
    var element,isId,isClas;
    if(isId = (properties.id != '')){element = getWidget(properties.id);}
    else if(isClas = (properties.className != '')){element = document.getElementsByClassName(properties.className);}

    if(isId || isClas){
        for (var key in properties) {
            element.style[key] = properties[key];
        }
    }
}
function removeWidget(id){
  var element = document.getElementById(id);
  if(element.parentNode){
    element.parentNode.removeChild(element);
  }
}
function addListener(id,trigger,func){
    var element = getWidget(id);
    element.addEventListener(trigger,func)
}
function alias(item){
    map = {
        'comment':'textarea',
        'class':'className',
    };
    return (map[item]) ? map[item]:item;
}

//# = any string
//#n = nth string in dump
//strings corresponding to # are placed in an array
//|#n = nth string in dump is a label and needs to be translated to line number
//$#n = nth string in dump needs to be translated with an alias
aliases = {
  '+'		:'add',
  '-'		:'sub',
  '*'		:'mul',
  '/'		:'div',
  '//'	:'idiv',
  '%'		:'mod',
  '**'	:'pow',
  '=='	:'equal',
  '!='	:'notEqual',
  '&&'	:'land',
  '<'		:'lessThan',
  '<='	:'lessThanEq',
  '>'		:'greaterThan',
  '>='	:'greaterThanEq',
  '==='	:'strictEqual',
  '<<'	:'shl',
  '>>'	:'shr',
  '|'		:'or',
  '&'		:'and',
  '^'		:'xor',

  'abs'	:'abs',
  'ln'	:'log',
  'lg'	:'log10',
  'floor'	:'floor',
  'ceil'	:'ceil',
  'sqrt'	:'sqrt',
  'random':'rand',
  'sin'	:'sin',
  'cos'	:'cos',
  'tan'	:'tan',
  'rsin'	:'asin',
  'rcos'	:'acos',
  'rtan'	:'atan',

};

translations = [
['# = read # at #',										'read #1 #2 #3'],
['write # to # at #',									'write #1 #2 #3'],
['# = #',												'set #1 #2'],
['# = ! #',												'op not #1 #2'],
['# = max # #',											'op max #1 #2 #3'],
['# = min # #',											'op min #1 #2 #3'],
['# = angle # #',										'op angle #1 #2 #3'],
['# = len # #',											'op len #1 #2 #3'],
['# = noise # #',										'op noise #1 #2 #3'],
['wait #',												'wait #1'],
['# = lookup # at #',									'lookup #2 #1 #3'],
['halt',												'end'],
['end',													'end'],
['# = find # in #',										'sensor #1 #3 #2'],
['# = # find # & # & # sort by # asc',					'radar #3 #4 #5 #6 #2 1 #1'],
['# = # find # & # & # sort by # desc',					'radar #3 #4 #5 #6 #2 0 #1'],

['bind #',												'ubind #1'],
['[ # # ] success # link # = find building # enemy',	'ulocate building #5 true 0 #1 #2 #3 #4'],
['[ # # ] success # link # = find building # ally',		'ulocate building #5 false 0 #1 #2 #3 #4'],
['[ # # ] success # link # = find #',					'ulocate #5 0 0 0 #1 #2 #3 #4'],
['[ # # ] success # = find ore #',						'ulocate ore 0 0 #4 #1 #2 #3'],
['# = # locate # & # & # sort by # asc',				'uradar #3 #4 #5 #6 #2 1 #1'],
['# = # locate # & # & # sort by # desc',				'uradar #3 #4 #5 #6 #2 0 #1'],

['idle',												'ucontrol idle'],
['stop',												'ucontrol stop'],
['move [ # # ]',										'ucontrol move #1 #2'],
['approach [ # # ] radius #',							'ucontrol approach #1 #2 #3'],
['boost = #', 											'ucontrol boost #1'],
['go to spawn',											'ucontrol pathfind'],
['shoot at [ # # ] fire #',								'ucontrol target #1 #2 #3'],
['shoot at # fire #',									'ucontrol targetp #1 #2'],
['drop # to #',											'ucontrol itemDrop #2 #1'],
['take # # from #',										'ucontrol itemTake #3 #2 #1'],
['drop payload',										'ucontrol payDrop'],
['take # payload',										'ucontrol payTake #1'],
['enter payload',										'ucontrol payEnter'],
['mine [ # # ]',										'ucontrol mine #1 #2'],
['set flag to #',										'ucontrol flag #1'],
['build [ # # ] structure # rotation # config #',		'ucontrol build #1 #2 #3 #4 #5'],
['buiding # type # = get block [ # # ]',				'ucontrol getBlock #3 #4 #2 #1'],
['# = unit within [ # # ] radius #',					'ucontrol within #2 #3 #4 #1'],

['clear rgb # # #',										'draw clear #1 #2 #3'],
['set color rgba # # # #',								'draw color #1 #2 #3 #4'],
['set stroke #',										'draw stroke #1'],
['line [ # # ] [ # # ]',								'draw line #1 #2 #3 #4'],
['rect [ # # ] width # height #',						'draw rect #1 #2 #3 #4'],
['line rect [ # # ] width # height #',					'draw linerect #1 #2 #3 #4'],
['poly [ # # ] sides # radius # rotation # ',			'draw poly #1 #2 #3 #4 #5'],
['line poly [ # # ] sides # radius # rotation # ',		'draw linepoly #1 #2 #3 #4 #5'],
['triangle [ # # ] [ # # ] [ # # ]',					'draw triangle #1 #2 #3 #4 #5 #6'],
['image # [ # # ] scale # rotation #',					'draw image #2 #3 #1 #4 #5'],

['draw release #',										'drawflush #'],
['print #',												'print #'],
['print release #',										'printflush #'],
['branch #',											'jump |#1 always'],
['branch # if # # #',									'jump |#1 $#3 #2 #4'],
['# = # #',												'op $#2 #1 #3'],
['# = # # #',											'op $#3 #1 #2 #4'],
];

function compile(code, labels, translations, aliases){
  code = code.split('\n');
  labels = labels.split('\n');
  compilerOutput = {code:'',errors:{count:0}};
  dump = {index:1};
  output = '';


  for (var i = 0; i < code.length; i++) {

    line = code[i].split(' ');
    compiled =false;//i=line,ii=translation,iii=word
    for (var ii = 0; (ii < translations.length && !compiled); ii++) {
      if (code[i] != '' && code[i].slice(0,2) != '//') {
        template = translations[ii][0].split(' ');
        dump.index = 1;
        match = true;

        if(match = template.length == line.length){
          for (var iii = 0; iii < line.length && match; iii++) {
            if(template[iii] == '#'){
              dump[dump.index] = line[iii];
              dump.index++;
            }
            else if(template[iii] != line[iii]){
              dump.index =1;
              match = false;
            }
          }
        }

        if(match){
          compiled =true;
          output ='';
          template = translations[ii][1].split(' ');
          for (var iii = 0; iii < template.length; iii++) {
            if(template[iii][0] == '#'){
              output += dump[template[iii][1]] +' ';
            }
            else if (template[iii][0] == '|') {
              output += (labels.indexOf(dump[template[iii][2]])).toString() +' ';
              if(labels.indexOf(dump[template[iii][2]]) == -1){compiled = 2}
            }
            else if (template[iii][0] == '$') {
              output += (aliases[dump[template[iii][2]]]) +' ';
              if(labels.indexOf(dump[template[iii][2]]) == undefined){compiled = false}
            }
            else{
              output += template[iii] +' ';
            }
          }
        }
      }
      else {
        compiled = 1;
      }
    }

    if(compiled === false){
      compilerOutput.errors[i] = "Syntax: couldn't translate";
      compilerOutput.errors.count++;
    }
    else if (compiled === 1) {

    }
    else if (compiled === 2) {
      compilerOutput.errors[i] = "Script: couldn't find label";
      compilerOutput.errors.count++;
      }
    else{
      compilerOutput.code +=output +'\n'
    }
  }

  return compilerOutput;
}
