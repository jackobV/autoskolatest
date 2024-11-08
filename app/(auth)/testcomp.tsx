export default function TestComp({email,setEmail}:{email:string;setEmail:React.Dispatch<React.SetStateAction<string>>}) {
    return <div>

        <input type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} />

    </div>
}