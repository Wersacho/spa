function About() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>About Us</h1>
            </header>
            <main>
                <img className="about-image" src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="About Us"/>
                <p className="about-description">
                    Welcome to our recipe website! We are passionate about sharing delicious recipes and culinary experiences
                    with food enthusiasts from all around the world. Our mission is to inspire you to explore new flavors,
                    try out exciting recipes, and create memorable dining experiences in your own kitchen.
                </p>
            </main>
        </div>
    );
}

export { About };