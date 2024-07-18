"use client"
import userSvg from "../../../(media)/user-128.svg"
import Image from "next/image";
import {useEffect, useState, useRef, useCallback} from "react";
import PocketBase from "pocketbase";
import {loadStripe} from "@stripe/stripe-js";
import {EmbeddedCheckoutProvider} from "@stripe/react-stripe-js";
import EstablishCheckout from "@/app/(auth)/registrace/(components)/establishCheckout";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";
interface Date{
    id:string;
    day:string;
    month:string;
    active:boolean;
    inCart:number;
}
export default function Register(){
    const categoryIds =["wq8ils5ph00l87u","eysdkjavl07ke2c","e3kh74w2vq5dap2"]
    const categoryNames = ["A","B","C"]
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    const [email,setEmail] = useState("")
    const [emailFail, setEmailFail] = useState("")
    const [name,setName] = useState("")
    const [nameFail,setNameFail] = useState("")
    const [surname, setSurname] = useState("")
    const [surnameFail,setSurnameFail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordFail, setPasswordFail] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [passwordAgainFail, setPasswordAgainFail] = useState("")
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [paymentMethodFail, setPaymentMethodFail] = useState(false)
    const [newCustomer, setNewCustomer] = useState(true)
    const [userEmail, setUserEmail] = useState("")
    const userEmailRef = useRef<HTMLInputElement | null>(null);
    const [userPassword, setUserPassword] = useState("")
    const userPasswordRef = useRef(null)
    const [userEmailFail, setUserEmailFail] = useState("")
    const [userPasswordFail, setUserPasswordFail] = useState("")
    const [loginFail, setLoginFail] = useState(false)
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
    const [isPassRegexValid, setIsPassRegexValid] = useState(true);
    const [loadingPayment,setLoadingPayment] = useState(false)
    const [registerComplete,setRegisterComplete] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(categoryIds[1])
    const [userId,setUserId] = useState<undefined|string>(undefined)
    // @ts-ignore
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch("/api/checkout_sessions", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = {fetchClientSecret};

    const handlePay = () => {
        setRegisterComplete(true)
    }
    function validatePassword(){
        return true
    }
    function validateForm(){
            if(email !== ""){
                setEmailFail("")
                if(name !== ""){
                    setNameFail("")
                        if(password !== ""){
                            setPasswordFail("")
                            if(validatePassword()){
                                return(true)
                            }else{
                                setPasswordAgainFail("Hesla se neshodují")
                                return(false)
                            }
                        }else{
                            setPasswordFail("Heslo je povinné pole")
                            return(false)

                        }
                }else{
                    setNameFail("Jméno je povinné pole")
                    return(false)

                }
            }else{
                setEmailFail("Email je povinné pole")
                return(false)
            }

    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("handle")
                if(validateForm()){
                    try {
                        setLoadingPayment(true);
                        const data = {
                            "email": email,
                            "emailVisibility": true,
                            "password": password,
                            "passwordConfirm": password,
                            "name": name,
                            "category":selectedCategory
                        };
                        const user = await pb.collection('users').create(data);
                        setUserId(user.id)
                        await pb.collection("users").authWithPassword(email,password);
                        handlePay();
                    } catch (error) {
                        setLoadingPayment(false)
                        console.log(error)
                        setEmailFail("K registraci použijte jinou emailovou adresu.")
                    }}else{
                    console.log("not valid")
                    setLoadingPayment(false)
                    setPasswordAgain("")
                }
    }

    useEffect(()=>{
        setUserEmailFail("")
        setPasswordFail("")
        setUserPasswordFail("")
        setSurnameFail("")
        setNameFail("")
        setEmailFail("")
        setPasswordAgainFail("")
    },[newCustomer])
    useEffect(()=>{
        if(userEmailRef.current && userEmailRef.current.value){
            setUserEmail(userEmailRef.current.value)
        }
    },[])
    useEffect(()=>{
        if(paymentMethod){
            setPaymentMethodFail(false)
        }
    },[paymentMethod])

    const handleInputChangePass = (e:any) => {
        const value = e.target.value;
        setPassword(value)
        setIsPassRegexValid(passwordRegex.test(value));
    };

    return(
        <div className="w-full min-h-screen flex flex-col md:justify-center h-full">
            {registerComplete ?
                <div className="w-full mx-auto max-w-2xl px-6 h-full  py-6 rounded-md rounded-t-none md:rounded-t-md overflow-hidden">
                    <EstablishCheckout email={email} category={selectedCategory} userId={userId} />
                </div> :
                <div className="mx-auto w-full max-w-lg px-6 md:px-10">
                    <form className="flex flex-col md:flex-row gap-y-10 bg-gray-800 pt-2 py-6 md:py-6 px-4 w-full rounded-md rounded-t-none md:rounded-t-md  "
                          onSubmit={handleSubmit}>
                        <div className="w-full">
                            <div className="flex flex-col gap-y-5 w-full ">
                                <div className={"flex flex-row text-white font-semibold tracking-wide text-xl"}>Registrace</div>
                                <div className="flex flex-col w-full gap-y-3 relative">
                                    <p className="text-gray-300 md:text-md text-sm">Skupina řidičského oprávnění</p>
                                        {selectedCategory === "wq8ils5ph00l87u" ?
                                            <div className={"flex flex-row items-around w-full gap-x-2"}>
                                                <button
                                                    className="w-full bg-yellow-500 text-white font-semibold items-center text-center justify-center py-2 rounded-md" type={"button"}>
                                                    A
                                                </button>
                                                <button
                                                    className="w-full bg-gray-300 items-center text-center justify-center py-2 rounded-md" onClick={() => setSelectedCategory("eysdkjavl07ke2c")} type={"button"}>
                                                    B
                                                </button>
                                                <button
                                                    className="w-full bg-gray-300 items-center text-center justify-center py-2 rounded-md" onClick={() => setSelectedCategory("e3kh74w2vq5dap2")} type={"button"}>
                                                    C
                                                </button>
                                            </div> :
                                            selectedCategory === "eysdkjavl07ke2c" ?
                                                <div className={"flex flex-row items-around w-full gap-x-2"}>
                                                    <button
                                                        className="w-full bg-gray-300 items-center text-center justify-center py-2 rounded-md" onClick={() => setSelectedCategory("wq8ils5ph00l87u")} type={"button"}>
                                                        A
                                                    </button>
                                                    <button
                                                        className="w-full bg-yellow-500 text-white font-semibold items-center text-center justify-center py-2 rounded-md" type={"button"}>
                                                        B
                                                    </button>
                                                    <button
                                                        className="w-full bg-gray-300 items-center text-center justify-center py-2 rounded-md" onClick={() => setSelectedCategory("e3kh74w2vq5dap2")} type={"button"}>
                                                        C
                                                    </button>
                                                </div> :
                                                <div className={"flex flex-row items-around w-full gap-x-2"}>
                                                    <button
                                                        className="w-full bg-gray-300 items-center text-center justify-center py-2 rounded-md" onClick={() => setSelectedCategory("wq8ils5ph00l87u")} type={"button"}>
                                                        A
                                                    </button>
                                                    <button
                                                        className="w-full bg-gray-300 items-center text-center justify-center py-2 rounded-md" onClick={() => setSelectedCategory("eysdkjavl07ke2c")} type={"button"}>
                                                        B
                                                    </button>
                                                    <button
                                                        className="w-full bg-yellow-500 text-white font-semibold items-center text-center justify-center py-2 rounded-md" type={"button"}>
                                                        C
                                                    </button>
                                                </div>
                                        }
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <p className="text-gray-300 text-sm">Email</p>
                                    <input type="email"
                                           name={"email"}
                                           id={"email"}
                                           autoComplete={"email"}
                                           className="bg-gray-200 rounded-lg w-full py-2 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400"
                                           placeholder="jannovak@email.cz" onChange={e => setEmail(e.target.value)}/>
                                    {emailFail === "" ? <p className="hidden"></p> :
                                        <p className="text-red-500">{emailFail}</p>}
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <div className="flex flex-col w-full gap-y-2">
                                        <p className="text-gray-300 text-sm">Jméno</p>
                                        <input type="text"
                                               name={"name"}
                                               id={"name"}
                                               autoComplete={"name"}
                                               className="rounded-lg bg-gray-200 w-full py-2 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400"
                                               placeholder="Jan Novák" onChange={e => setName(e.target.value)}/>
                                        {nameFail === "" ? <p className="hidden"></p> :
                                            <p className="text-red-500">{nameFail}</p>}

                                    </div>
                                </div>
                                <div className="flex flex-col w-full gap-y-2">
                                    <p className="text-gray-300 text-sm">Heslo</p>
                                    <input type="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                                           name={"new-password"}
                                           id={"new-password"}
                                           autoComplete={"new-password"}
                                           className="rounded-lg bg-gray-200 w-full py-2 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400"
                                           placeholder="Heslo" onChange={handleInputChangePass}/>
                                    {passwordFail === "" ? <p className="hidden"></p> :
                                        <p className="text-red-500">{passwordFail}</p>}
                                    {!isPassRegexValid && <div className="list-disc">
                                        <p className="text-sm text-gray-300">Heslo musí obsahovat:</p>
                                        <ul className="px-4 list-disc text-sm text-gray-300 decoration-gray-300 ">
                                            <li>8 znaků</li>
                                            <li>Velké písmeno</li>
                                            <li>Číslici</li>
                                        </ul>
                                    </div>}
                                </div>

                                <div className="flex flex-row w-full gap-x-2 items-center">
                                    <input type={"checkbox"} id={"checkboxone"} className="rounded-md" required={true}/>
                                    <label htmlFor={"checkboxone"} className="text-sm text-gray-300">Souhlasím se
                                        zpracováním osobních údajů (GDPR)</label>
                                </div>
                            </div>
                            <div className="pt-6">
                                <button className="w-full py-2 text-center bg-green-400 text-green-700 font-semibold tracking-wide rounded-lg"
                                        type={"submit"}>Přejít na platbu
                                </button>
                            </div>
                        </div>
                    </form>

                </div>}


        </div>
    )
}