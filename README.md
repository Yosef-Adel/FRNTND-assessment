1-	I created a page called Products.js in it I fetched the data from the json file then I mapped it using the map function and called the component Product from the Components file. In the Product Component I displayed The purchase order type abbreviation and purchase order number. Instead of just clicking the order to view the details I displayed a button to show the details. 


2-	I decided to make the pop-up window as it’s more user friendly than navigating through pages to view the details. I created a generic modal that I can use more than one time. In the model I used ReactDOM createPortal to control where to display it in the HTML file. I used props to pass functions instead of using React Redux because if I used Redux the modal will be for this specific component, but now I can use it to show API errors Or notifications. The modal is in the UI directory. 
In the ProductDetails.js file I displayed the data you need, and created a table of purchase order details I mapped the rows in it.


3-	I Used the rem as I can control it form the index.css file just one time 

4-	I think that the projects I worked on made me write code that I can scale it up, not just a code for this component. I created pages directory and put in it the Products.js page instead of just using the app.js file as I know if I want to put more features in the project, I will need to use React Router, so I need to keep the App.js for the Routing function. I used components that I can use more than one time and I can make it tasks and assign it to a team member.
I used rem instead of using px so I can control it from one file not making media query in all files 









