### General CSS Modifications

1. **Use Relative Units**: Replace fixed pixel values with relative units like percentages (`%`), `em`, or `rem` for widths, margins, and paddings.
2. **Media Queries**: Add media queries to adjust styles for different screen sizes.

### Example CSS Modifications

Here’s an example of how you can modify the CSS for the provided HTML documents:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: #f5f5f5;
}

header {
    background: #222;
    color: #fff;
    padding: 1em; /* Use relative units */
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column; /* Stack elements vertically on small screens */
    height: auto; /* Allow height to adjust based on content */
}

.sidebar {
    width: 100%; /* Full width on small screens */
    background: #333;
    color: #fff;
    padding: 1em; /* Use relative units */
}

.sidebar h2 {
    font-size: 1.2em; /* Use relative units */
    margin-top: 0;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin: 0.5em 0; /* Use relative units */
}

.sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 0.5em; /* Use relative units */
    border-radius: 4px;
}

.sidebar a:hover {
    background: #444;
}

.content {
    flex: 1;
    padding: 1em; /* Use relative units */
    overflow-y: auto;
}

.topic {
    display: none;
}

.topic.active {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
}

.code-block {
    background: #1e1e1e;
    color: #dcdcdc;
    padding: 1em; /* Use relative units */
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre;
    font-family: Consolas, monospace;
    font-size: 1em; /* Use relative units */
}

.explanation {
    background: #fff;
    padding: 1em; /* Use relative units */
    border-radius: 8px;
}

.output {
    background: #000;
    color: #0f0;
    padding: 1em; /* Use relative units */
    margin-top: 1em; /* Use relative units */
    border-radius: 5px;
    font-family: Consolas, monospace;
    font-size: 1em; /* Use relative units */
}

/* Media Queries for Responsiveness */
@media (min-width: 600px) {
    .container {
        flex-direction: row; /* Side by side on larger screens */
    }

    .sidebar {
        width: 240px; /* Fixed width for sidebar on larger screens */
    }

    .content {
        flex: 1; /* Take remaining space */
    }
}

@media (max-width: 600px) {
    .sidebar {
        width: 100%; /* Full width on small screens */
    }

    .content {
        padding: 0.5em; /* Adjust padding for smaller screens */
    }
}
```

### Implementation Steps

1. **Replace the existing CSS** in each HTML document with the modified CSS provided above.
2. **Test the responsiveness** by resizing the browser window or using developer tools to simulate different devices.

### Additional Considerations

- **Font Sizes**: You may want to adjust font sizes using `em` or `rem` units for better scalability.
- **Images and Media**: If your documents include images or videos, ensure they are responsive by setting their max-width to 100% and height to auto.
- **Testing**: Always test on actual devices or emulators to ensure the layout behaves as expected across different screen sizes.

By following these guidelines, your HTML documents will be more responsive and user-friendly on mobile phones and tablets.