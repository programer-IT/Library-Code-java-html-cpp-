body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: #f5f5f5;
}

header {
    background: #222;
    color: #fff;
    padding: 1rem; /* Use rem for better scaling */
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column; /* Stack elements on small screens */
    height: auto; /* Allow height to adjust */
}

.sidebar {
    width: 100%; /* Full width on small screens */
    background: #333;
    color: #fff;
    padding: 1rem;
    overflow-y: auto;
}

.sidebar h2 {
    font-size: 1.5rem; /* Use rem for better scaling */
    margin-top: 0;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin: 0.5rem 0; /* Use rem for better scaling */
}

.sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 0.5rem; /* Use rem for better scaling */
    border-radius: 4px;
}

.sidebar a:hover {
    background: #444;
}

.content {
    flex: 1;
    padding: 1rem; /* Use rem for better scaling */
    overflow-y: auto;
}

.topic {
    display: none;
}

.topic.active {
    display: flex;
    flex-direction: column; /* Stack elements on small screens */
}

.code-block {
    background: #1e1e1e;
    color: #dcdcdc;
    padding: 1rem; /* Use rem for better scaling */
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre;
    font-family: Consolas, monospace;
    font-size: 1rem; /* Use rem for better scaling */
}

.explanation {
    background: #fff;
    padding: 1rem; /* Use rem for better scaling */
    border-radius: 8px;
}

.output {
    background: #000;
    color: #0f0;
    padding: 0.5rem; /* Use rem for better scaling */
    margin-top: 0.5rem; /* Use rem for better scaling */
    border-radius: 5px;
    font-family: Consolas, monospace;
    font-size: 1rem; /* Use rem for better scaling */
}

/* Media Queries for Responsiveness */
@media (min-width: 600px) {
    .container {
        flex-direction: row; /* Side by side on larger screens */
    }

    .sidebar {
        width: 240px; /* Fixed width for sidebar */
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
        padding: 0.5rem; /* Adjust padding for smaller screens */
    }
}