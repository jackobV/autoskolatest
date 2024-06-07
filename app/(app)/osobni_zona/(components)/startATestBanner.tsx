import {CheckCircleIcon} from "@heroicons/react/20/solid";

export default function StartATestBanner() {
    return (
        <div className=" max-w-6xl mx-auto w-full flex flex-row justify-between items-center rounded-md bg-dark-tremor-background p-4">
            <div className="text-white">
                <h2 className="font-semibold text-xl">Chytrý test</h2>
                <ul className="py-3">
                    <li className="flex flex-row gap-x-3">
                        <CheckCircleIcon className="h-7 w-5 flex-none" />
                        <p className="">stejná struktura jako oficiální test</p>
                    </li>
                    <li className="flex flex-row gap-x-3">
                        <CheckCircleIcon className="h-7 w-5 flex-none" />
                        <p className="">chytrý výběr otázek za pomoci <span className="font-bold">AI</span></p>
                    </li>
                    <li className="flex flex-row gap-x-3">
                        <CheckCircleIcon className="h-7 w-5 flex-none" />
                        <p className="">délka testu: 30 minut</p>
                    </li>
                    <li className="flex flex-row gap-x-3">
                        <CheckCircleIcon className="h-7 w-5 flex-none" />
                        <p className="">počet testových otázek: 25</p>
                    </li>
                </ul>
                <button className="px-20 py-4 bg-white rounded-xl text-tremor-content-strong font-semibold">Spustit test</button>

            </div>

        </div>
    )
}
