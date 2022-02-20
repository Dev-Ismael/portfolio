    
    
    
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
        // prevent load page 
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        var formBtn = document.getElementById("my-form-button");

        // send request
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
            // get result
        }).then(response => {
            if (response.ok) {
                // if messege send successfully
                formBtn.innerHTML = ' <i class="fa-solid fa-check"></i> Messege Sent!';
                alert("Messege Sent!");
                // empty form
                form.reset();
                // disable all form labels
                var elements = form.elements;
                for (var i = 0, len = elements.length; i < len; ++i) {
                    elements[i].readOnly = true;
                }

            } else {
                // if messege has errors
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert( data["errors"].map(error => error["message"]).join(", ") );
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form");
        });
    }
    form.addEventListener("submit", handleSubmit)