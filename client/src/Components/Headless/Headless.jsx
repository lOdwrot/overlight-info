import React from 'react'

export default () => {
    return (
        <div className='frame-item'>
            <div className='frame-content-text home-screen'>
                <h3>What Is Overlight Headless?</h3>
                <p>
                    Overlight Headless is CLI tool that let you run Scenarios created with Overlight Test Automation from CLI and let you easy plug in Tests to CI process. Overlight Headless is available in Beta version and you need to have valid License with proper permissions.
                </p>
                <h3>Configuration</h3>
                <p>1. Download and install chrome.</p>
                <p>2. Download chromedriver <a href='http://chromedriver.storage.googleapis.com/index.html'>here</a> adjusted to chrome version on your machine.</p>
                <p>3. Add webdriver to environmental PATH.</p>
                <p>4. Download Overlight Headless adjusted to your system <a href='https://drive.google.com/open?id=1YaCt8iCE3FegPrwR9EWll_Izj-jCGJzb'>here</a>.</p>
                <p>5. Rename it by remove system information from name and add to environmental PATH.</p>
                <p>6. Run command below to see Overlight Headless parameters.</p>
                <pre className='code'>
                    overlight-headless --help
                </pre>
                <p>7. Create credentials file.</p>
                <pre className='code'>
                    overlight-headless --mail="HERE_TYPE_MAIL" --licenseKey="HERE_TYPE_LICENSE_KEY"
                </pre>
                <p>8. Run scenarios (from local file or EasyShare).</p>
                <pre className='code'>
                    overlight-headless --importedFiles="Scenarios.zip" --executedTests="Scenario1" --executedTests="Scenario2"
                </pre>
                <h3>Load Data from csv file</h3>
                <p>You can use syntax below to load data from csv file that will be available as variables inside your scenario. CSV need to be valid file with ";" as a separator between fields. First row define names of variables. Scenario will be executed for every row in csv file.</p>
                <pre className='code'>
                    overlight-headless --importedFiles="Scenarios.zip" --executedTests="Scenario1>data.csv"
                </pre>
                <p>More details available in overlight-headless --help</p>
            </div>
        </div>
    )
}