# Module 11 Challenge: UFO

## Background and Purpose:
As an avid UFO enthusiast, Dana is looking to create an interactive table that filters UFO sightings data stored in a JavaScript array. To accomplish this goal, Dana has asked me to design a user-friendly [HTML](https://github.com/laurlen2112/UFO/blob/main/challenge_final/index.html) interface that allows visitors to view the table and input filters on a web browser.

To implement the filtering functionality, I leveraged the power of [JavaScript](https://github.com/laurlen2112/UFO/blob/main/challenge_final/static/js/app.js) by writing multiple filter functions that dynamically update the table based on user input. These functions enable users to filter sightings by date, city, state, country, and shape.

To make the final product visually appealing, I customized the [CSS file](https://github.com/laurlen2112/UFO/blob/main/challenge_final/static/css/style.css) by adding an eye-catching image to the jumbotron, creating a sleek dark background, and adding a bold green outline to the headline text.

Through this project, I was able to showcase my skills in web development, data manipulation, and user interface design. I am excited to continue collaborating with Dana on future projects and to demonstrate my expertise to potential employers in the tech industry.

<img src ="https://github.com/laurlen2112/UFO/blob/main/resources/part%201%20code%20snippet.png"/>

## Results:

When the user [opens the webpage](https://github.com/laurlen2112/UFO/blob/main/resources/inital.png), they will immediately notice the interactive table with unfiltered data and a set of input boxes to the left of the table. The input boxes come equipped with placeholder text that provides helpful examples of inputs to enter, and the table updates automatically in real-time as the user enters new search criteria.

For example, if the user enters [1/13/2010](https://github.com/laurlen2112/UFO/blob/main/resources/date.png) in the date input box, the table instantly updates to show only the four sightings that occurred on that date. Similarly, if the user enters a [city name](https://github.com/laurlen2112/UFO/blob/main/resources/city.png), the table will return all sightings that match both the city and the date criteria.

Thanks to the underlying [JavaScript code](https://github.com/laurlen2112/UFO/blob/main/resources/change%20event.png) , there's no need for the user to click a button to trigger the filter. The code "listens" to changes in the input boxes and reacts accordingly, making for a seamless and efficient user experience.

With this streamlined approach to filtering, Dana and I were able to create a web page that is both easy to use and visually appealing, showcasing our skills in web development, user interface design, and JavaScript programming.

<img src="https://github.com/laurlen2112/UFO/blob/main/resources/web%20collage.png"/>

## Summary:

One limitation of the interactive table is that the data source is a static [JavaScript file](https://github.com/laurlen2112/UFO/blob/main/challenge_final/static/js/data.js). This means that the only way to add new sightings to the table is by manually editing the data.js file. While this may not be a major issue for smaller datasets, it could pose a challenge for larger datasets that require frequent updates.

Other minor drawbacks of the table include the case-sensitivity of the input boxes, which can lead to inconsistent search results if the user enters capital letters where they are not expected. For instance, entering "Bonita" with a capital ["B"](https://github.com/laurlen2112/UFO/blob/main/resources/Bonita.png) would return no results, despite the fact that the city is listed as "bonita" in the data.

Another issue is the lack of standardized formatting in the data itself. For example, in the ["duration" column](https://github.com/laurlen2112/UFO/blob/main/resources/clean%20data.png), there are misspellings of "seconds" and inconsistent abbreviations for "minutes". While these issues may not significantly impact the functionality of the table, they could create confusion for users and detract from the overall user experience.

Despite these limitations, the interactive table still serves as an impressive showcase of our web development, user interface design, and JavaScript programming skills. Moving forward, we could explore ways to integrate a dynamic data source or to standardize the formatting of the data to create an even more effective and user-friendly product.

<img src ="https://github.com/laurlen2112/UFO/blob/main/resources/part%203%20collage.png" width="900" height="700"/>
For her next update, Dana may want to consider implementing some key improvements to the interactive table. One idea is to create a Python file that uses tools like Splinter and BeautifulSoup to scrape the web and return real-time data to the table. This would help ensure that the table stays up-to-date and relevant, without requiring manual updates to the data.js file.

Another improvement would be to add more flexibility to the input boxes, allowing for case-insensitive searches and more forgiving matching algorithms. For instance, a search for "bonita" should return results for both "bonita" and "Bonita", regardless of capitalization. This could be accomplished through various techniques, such as using regular expressions or implementing custom search algorithms.

Finally, it would be beneficial to clean the data in the table to make it more uniform and consistent. This could involve eliminating misspellings and standardizing the formatting of abbreviations and units of time, such as ensuring that "seconds" is spelled correctly and that all instances of "minutes" are abbreviated in the same way.

By making these improvements, Dana can create an even more powerful and user-friendly interactive table that showcases her skills in web development, data manipulation, and programming. With these changes, the table could become an even more valuable resource for UFO enthusiasts and researchers alike.  

