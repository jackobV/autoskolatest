import PocketBase from "pocketbase";

export default async function AssignQuestions({ categoryID, userID }:{ categoryID:string, userID:string }) {
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    pb.autoCancellation(false);
    const questionsRaw = await pb.collection("category").getFullList();

    for (const category of questionsRaw) {
        if (category.id === "1xlri5vx466bfqt" || category.id === "oqw98ds03hofyhb" || (category.id === "e3kh74w2vq5dap2" && categoryID === "e3kh74w2vq5dap2") ||
            (category.id === "eysdkjavl07ke2c" && categoryID === "eysdkjavl07ke2c") || (category.id === "wq8ils5ph00l87u" && categoryID === "wq8ils5ph00l87u") ||
            category.id === "l4t3asvmg8tc873" || category.id === "am7fli1w8fckmmm" || category.id === "zawcp7ctmohtfts" || category.id === "sf10my3uhqik14q" ||
            category.id === "m447h3rqjy9vmve" || category.id === "lfw9b1mdl1a7ao9" || category.id === "we10dfuu22j50qk") {

            for (const item of category.questions) {
                await pb.collection("question_user_data").create({
                    "user": userID,
                    "category": category.id,
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                });
            }
        }
    }
}