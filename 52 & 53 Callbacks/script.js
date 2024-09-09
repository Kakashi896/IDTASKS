// CREATING CALLBACKS (52) ----------------------------------------------------------------

// function loadScript(src, callback){
//     var script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         console.log("Script loaded from src " + src);

//         callback(src );
//     }
//     document.body.appendChild(script);
// }

// function hello(src){
//     alert("Loaded " + src)
// } 
// function mello(src){
//     alert("mello guys" +src)
// } 

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' , hello);



// ERROR HANDLING (52) --------------------------------------------------------------------

// function loadScript(src, callback){
//     var script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         console.log(null + src);

//         callback(src );
//     }
//     script.onerror = function(){
//         console.log('Error loading script: ' + src);
//         callback(new Error("Src not found:  " + src));

//     }
//     document.body.appendChild(script);
// }

// function hello(error, src){
//     if (error) {
//         console.log(error);
//     }
//     alert("Loaded " + src)
// } 
// function mello(src){
//     alert("mello guys" +src)
// } 

// loadScript('https://cdn.jsdelivr.neet/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' , hello);


// CALLBACK HELL OR PYRAMID OF DOOM (53) --------------------------------------------------

        function loadScript(src, callback) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = function () {
                console.log('Loaded: ' + src);
                callback(null, src);
            };
            script.onerror = function () {
                console.log('Error loading script: ' + src);
                callback(new Error("Src not found: " + src));
            };
            document.body.appendChild(script);
        }

        function sendEmergencyMessageToCeo() {
            console.log('Sending emergency message to CEO...');
            // Simulate sending an emergency message
        }

        function handleScriptLoad(error, src) {
            if (error) {
                console.log(error);
                sendEmergencyMessageToCeo();
                return;
            }
            console.log("Loaded " + src);
        }

        // Begin Callback Hell
        loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
            handleScriptLoad(error, src);

            if (error) return;

            loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
                handleScriptLoad(error, src);

                if (error) return;

                loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
                    handleScriptLoad(error, src);

                    if (error) return;

                    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
                        handleScriptLoad(error, src);

                        if (error) return;

                        loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
                            handleScriptLoad(error, src);

                            if (error) return;

                            loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
                                handleScriptLoad(error, src);

                                if (error) return;

                                loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function (error, src) {
                                    handleScriptLoad(error, src);
                                    // Continue nesting as needed
                                });
                            });
                        });
                    });
                });
            });
        });
   


// The growing of code horizontaly is caller pyramis of doom  and its is not good for your code health






















// CALLBACK PYRAMID OF DOOM (53) ----------------------------------------------------------

