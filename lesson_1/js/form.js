class InputRender {
    constructor(name, re){
        this._name = name;
        this._re = re;
        this.render();
    }

    get name(){
        return this._name;
    }

    get re(){
        return this._re;
    }

    render(){
        return new Promise((res, req) => {
            const container = document.createElement('div');
            container.classList.add(this.name);
            container.innerHTML = `
                <input type="text" placeholder='${this.name}' id='${'input' + this.name}'>`
            document.querySelector('footer').appendChild(container);
            const input = container.querySelector(`#${'input' + this.name}`);
            input.addEventListener('change', (event) => { this.validation(this.re)}) 
        })
    }

    validation(re){
        if(!((re).test(event.target.value))){
            event.target.classList.add('error');
        }
    }
}

class InputName extends InputRender{
    constructor(name, re){
        super(name, re);
    }
}

class InputTelephone extends InputRender{
    constructor(name, re){
        super(name, re);
    }
}

class InputEmail extends InputRender{
    constructor(name, re){
        super(name, re);
    }
}

let inputName = new InputName('name', /(^[A-Z])([a-z]+)$/);
let inputTelephone = new InputTelephone('telephone', /(^\+7)\(([0-9]{3})\)[0-9]{3}\-[0-9]{4}$/);
let inputEmail = new InputEmail('email', /(^[A-Za-z])([A-Za-z0-9\.\_\-]+)([A-Za-z0-9]{1})\@([a-z]+)\.([a-z]+)$/);