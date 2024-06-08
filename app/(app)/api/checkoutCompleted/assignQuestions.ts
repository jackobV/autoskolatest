import PocketBase, { Record } from "pocketbase";
export const maxDuration = 60;
// Helper function for retrying operations
async function retryOperation(operation: { (): Promise<Record>; (): any; }, retries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            if (attempt === retries) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Function to assign questions with retry mechanism
export default async function AssignQuestions({ categoryID, userID }:{categoryID:string,userID:string}) {
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    pb.autoCancellation(false);
    const questionsRaw = await pb.collection("category").getFullList();
    const promises:any = [];

    questionsRaw.forEach(category => {
        if (category.id === "1xlri5vx466bfqt" ||
            category.id === "oqw98ds03hofyhb" ||
            category.id === "l4t3asvmg8tc873" ||
            category.id === "am7fli1w8fckmmm" ||
            category.id === "zawcp7ctmohtfts" ||
            category.id === "sf10my3uhqik14q" ||
            category.id === "m447h3rqjy9vmve" ||
            category.id === "lfw9b1mdl1a7ao9" ||
            category.id === "we10dfuu22j50qk" ||
            (category.id === "e3kh74w2vq5dap2" && categoryID === "e3kh74w2vq5dap2") ||
            (category.id === "eysdkjavl07ke2c" && categoryID === "eysdkjavl07ke2c") ||
            (category.id === "wq8ils5ph00l87u" && categoryID === "wq8ils5ph00l87u")) {

            category.questions.forEach((item: any) => {
                promises.push(
                    retryOperation(() => pb.collection("question_user_data").create({
                        "user": userID,
                        "category": category.id,
                        "question": item,
                        "learned_probability": 0,
                        "viewed": false,
                        "learned": false
                    }))
                );
            });
        }
    });

    await limitedParallelProcessing(promises, 15); // Limit to 10 concurrent promises
}

// Function to limit the number of concurrent promises
async function limitedParallelProcessing(promises: any, limit = 10) {
    const results = [];
    const executing: any[] = [];
    for (const promise of promises) {
        const p = promise.then((result: any) => {
            executing.splice(executing.indexOf(p), 1);
            return result;
        });
        executing.push(p);
        results.push(p);
        if (executing.length >= limit) {
            await Promise.race(executing);
        }
    }
    return Promise.all(results);
}
