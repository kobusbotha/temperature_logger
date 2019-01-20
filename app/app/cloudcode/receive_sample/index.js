// This must be defined, and should return either access.authorized() or access.unauthorized()
export async function authenticate({request, access}) {
    return access.authorized();
}

// HTTP GET request
export async function get({params, request, response, authContext}) {
    // Handle the request here
}

export async function post({request, response}) {
    const body = await request.json(); 

    let sample = DB.sample.create();
    sample.captured_at = new Date();
    sample.temperature = body.temperature;
    sample.humidity = body.humidity;
    await sample.save();
    
    response.status(200);
}

export async function run() {
    // This function is not used for web tasks, but can be used for editor testing
}