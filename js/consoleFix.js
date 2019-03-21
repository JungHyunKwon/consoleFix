/**
 * @name consoleFix
 * @author JungHyunKwon
 * @since 2018-08-02
 * @version 1.0.0
 */

(function(console) {
	'use strict';

	//콘솔이 없을 때
	if(!console) {
		var methodNames = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'],
			methodCode = '',
			alt = [];
			
		window.console = {
			alt : alt
		};

		for(var i = 0, methodsLength = methodNames.length; i < methodsLength; i++) {
			var methodName = methodNames[i];

			methodCode += 'window.console.' + methodName + ' = function() {\n';
			methodCode += '    var result = {\n';
			methodCode += '        methodName : \'' + methodName + '\'\n';
			methodCode += '    },\n';
			methodCode += '    argumentsLength = arguments.length;\n\n';
			methodCode += '    if(argumentsLength > 1) {\n';
			methodCode += '        result.value = [];\n\n';
			methodCode += '        var value = result.value;\n\n';
			methodCode += '        for(var i = 0; i < argumentsLength; i++) {\n';
			methodCode += '            value[i] = arguments[i];\n';
			methodCode += '        }\n';
			methodCode += '    }else if(argumentsLength === 1) {\n';
			methodCode += '        result.value = arguments[0];\n';
			methodCode += '    }\n\n';
			methodCode += '    if(argumentsLength) {\n';
			methodCode += '        alt.push(result);\n';
			methodCode += '    }\n\n';
			methodCode += '    return result;\n';
			methodCode += '};\n\n';
		}
		
		//마지막 개행 제거
		methodCode = methodCode.replace(/\n$/, '');

		//함수 기입
		eval(methodCode);
	}
})(window.console);