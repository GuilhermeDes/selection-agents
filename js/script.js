       /*Função que reseta a div*/
       function inicial() {
        document.getElementById('inicial').style.display = 'flex';
        document.getElementById('raze').style.display = 'none';
        document.getElementById('reyna').style.display = 'none';
        document.getElementById('sage').style.display = 'none';
    }
    /*Função que tras as informações da raze*/
    function raze() {
        document.getElementById('inicial').style.display = 'none';
        document.getElementById('raze').style.display = 'flex';
        document.getElementById('reyna').style.display = 'none';
        document.getElementById('sage').style.display = 'none';
    }
    /*Função que tras as informações da reyna*/
    function reyna() {
        document.getElementById('inicial').style.display = 'none';
        document.getElementById('raze').style.display = 'none';
        document.getElementById('reyna').style.display = 'flex';
        document.getElementById('sage').style.display = 'none';
    }
    /*Função que tras as informações da sage*/
    function sage() {
        document.getElementById('inicial').style.display = 'none';
        document.getElementById('raze').style.display = 'none';
        document.getElementById('reyna').style.display = 'none';
        document.getElementById('sage').style.display = 'flex';
    }