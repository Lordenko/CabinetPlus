const deleteList = []

const leadElements = document.querySelectorAll('.lead')
const hrElements = document.querySelectorAll('hr')
const offerPointElements = document.querySelectorAll('.offer')
const strongElement = document.querySelectorAll('strong')
const aElements = document.querySelectorAll('a')
const footer = document.querySelectorAll('footer')

const pointsNoElements = document.querySelectorAll('.points.no')
const pointsYesElements = document.querySelectorAll('.points.yes')

const pointsElement = document.querySelectorAll('.points')

pointsElement.forEach(element => {
    element.style.width = '100px'
    // element.style.height = '40px'
});

pointsYesElements.forEach(element => {
    const cleanedText = element.textContent
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')

    if (cleanedText[1].includes('(')){
        cleanedText.splice(1, 3)
    }
    
    cleanedText.splice(1, 2)

    console.log(cleanedText);
    
    element.innerHTML = cleanedText.join('<br>')

});

aElements.forEach(element => {
    if (element.href.includes('site/info') || 
        element.href.includes('polls') ||
        element.href.includes('https://docs.google.com/forms/u/0/d/1VWASiYRCdklbGCuIxZ1AI85BoxDoJ8qBlURbp5yqXBg/viewform?edit_requested=true')){
            deleteList.push(element)
    }

    if (element.classList.contains('btn-success')){
        element.classList.remove('btn-success')
        element.classList.add('btn-primary')
    } 
});


offerPointElements.forEach(element => {
    deleteList.push(element.parentElement.parentElement)
});
deleteList.push(...leadElements)
deleteList.push(...hrElements)
deleteList.push(...strongElement)
deleteList.push(...footer)

deleteList.forEach(element => {
    element.style.display = 'none'
});

document.querySelectorAll('.table > tbody > tr > td').forEach(td => {
    td.style.verticalAlign = 'middle';
});

pointsNoElements.forEach(element => {
    if (element.textContent.includes('звільнено')){
        element.style.background = 'green'
        element.textContent = element.textContent.trim()
    }
});



  