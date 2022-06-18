class RunTrump extends HTMLElement{
    constructor(){
        super();
    //创建一个shadow root
    var shadow = this.attachShadow({
        mode:'open'
    })

    //创建一个div容器
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class','run');

    //创建一些css，并应用到shadow dom上
    var style = document.createElement('style');

    style.textContent = `
     .run{
         width:100px;
         height:100px;
         background-color: #d4d4d4;
         margin-left:100px;
     }
    `
    //简洁起见，省略了具体的css
    
    //将创建的元素附加到 shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

  }
}
// 标签名字与类进行关联
customElements.define('run-trump',RunTrump);