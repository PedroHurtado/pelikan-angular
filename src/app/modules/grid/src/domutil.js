export function createElement(domNodetype) {
    return document.createElement(domNodetype);
}
export function classList(domNode, classList) {
    (classList || []).forEach(cl => {
        domNode.classList.add(cl);
    });

}
export function setAttributes(domNode,attributes){
    Object.entries(attributes || {}).forEach(attr=>{
        if(typeof attr[1] === 'boolean'){
            domNode.setAttribute(attr[0]);
        }else{
            domNode.setAttribute(attr[0],attr[1]);
        } 
    });
}
export function appendChilds(domNode, domNodes) {
    (domNodes || []).forEach(n => {
        if (Array.isArray(n)) {
            appendChilds(domNode, n);
        } else {
            domNode.appendChild(n.render());
        }
    });
}
export function setWidth(domNode, width) {
    domNode.style.width = `${width}px`
}
export function createTextContent(domNode, text) {
    let domNodeText = document.createTextNode(text)
    domNode.appendChild(domNodeText);
}

export function updateElement(oldNode, newNode) {
    let parent = oldNode.parentNode;
    let nextSibling =oldNode.nextSibling;
    let previousSibling = oldNode.previousSibling;
    if(nextSibling){
        parent.insertBefore(newNode, nextSibling);
    }else if(previousSibling){
        parent.insertBefore(newNode, previousSibling.nextSibling);
    }
    else{
        parent.appendChild(newNode);
    }
}
export function removeNode(node) {
    node && node.remove();
}
export function createEvent(node,event,handler){
    node.addEventListener(event,handler,false);
}
export function removeEvent(node,event,handler){
    node.removeEventListener(event,handler,false);
}