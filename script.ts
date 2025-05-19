const toggleSwitch = document.querySelector<HTMLInputElement>('.toggle-checkbox');
const theme=document.querySelector("body")
toggleSwitch?.addEventListener("change",()=>{
    if(toggleSwitch.checked){
        theme?.classList.add("dark")
    }else{
        theme?.classList.remove("dark")
    }
})