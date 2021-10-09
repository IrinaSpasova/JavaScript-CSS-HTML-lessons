
    function extractText() {
        debugger;
        let itemNodes =
        
        document.querySelectorAll("ul#items li");
        
        let textarea =
        
        document.querySelector("#result");
       
        
        for (let node of itemNodes) {
        
        textarea.value += node.textContent + "\n";
        }

        console.log(itemNodes);
}