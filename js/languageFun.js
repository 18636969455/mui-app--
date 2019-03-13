
			(function($, doc) {
					var userPicker = new $.PopPicker();
					userPicker.setData([{
						value: 'en',
							text: 'English'
						}, {
							value: 'rm',
							text: 'Romana'
						}, {
							value: 'py',
							text: 'Pусский'
						}, {
							value: 'sb',
							text: 'Serbian'
						},{
							value: 'zh',
							text: '简体中文'
						}]);
					var showUserPickerButton = doc.getElementById('showUserPicker');
					var userResult = doc.getElementById('userResult');
					showUserPickerButton.addEventListener('tap', function(event) {
						userPicker.show(function(items) {
							showUserPickerButton.innerText = items[0].text;
							// userResult.innerText = JSON.stringify(items[0]);
							LC=items[0].value;//语言改变后传值
							//返回 false 可以阻止选择框的关闭
							//return false;
							langChange(LC)
						});
					}, false);
			})(mui, document);
			function langChange(LC){
				// console.log(LC)
				    document.body.className = LC;
					bdy(LC)
			};
			function bdy(LC){
				// console.log(LC)
				jQuery.i18n.properties({
				    name: 'strings', // 资源文件名称
				    path: 'language/', // 资源文件所在目录路径
				    mode: 'map', // 模式：变量或 Map 
				    language: LC, // 对应的语言
				    cache: false,
				    encoding: 'UTF-8',
				    callback: function (language) { // 回调方法    
				        for (var i in $.i18n.map) {
				        	$('[data-lang="' + i + '"]').text($.i18n.map[i]);
				        }
						// $('#text').html($.i18n.prop('string_text'));
				    }
				});
			}
			
