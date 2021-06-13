/**
 * 	inject_script('test.js', () => {
		console.log('test');
		setInterval(test, 1000);
	});

 * @param source
 * @param callback
 */
const inject_script = (source, callback) => {
    const script = document.createElement('script');
    script.src = source;
    script.addEventListener('load', callback);
    document.head.appendChild(script);
};

