let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let tmp = document.createElement('div')
tmp.setAttribute('class','dog-content')
content.append(tmp)
content = tmp

let image = document.createElement('img')
image.setAttribute('class','dog-image')
image.setAttribute('src', './assets/rizzo.jpg')
content.append(image)

tmp = document.createElement('div')
tmp.setAttribute('class','dog-details')
content.append(tmp)
content = tmp

let details = document.createElement('h3')
details.append('Description:')
content.append(details)

details = document.createElement('p')
details.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")
content.append(details)

details = document.createElement('h3')
details.append('Feeding Times:')
content.append(details)

let list = document.createElement('ul')
let time = document.createElement('li')
time.append('9:00 am')
list.append(time)
time = document.createElement('li')
time.append('12:00 pm')
list.append(time)
time = document.createElement('li')
time.append('5:00 pm')
list.append(time)
content.append(list)
