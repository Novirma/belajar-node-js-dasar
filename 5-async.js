function samplePromise(){
    return Promise.resolve("Spongebob");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();