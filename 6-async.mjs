function samplePromise(){
    return Promise.resolve("Spongebob");
}

const name = await samplePromise();
console.info(name);