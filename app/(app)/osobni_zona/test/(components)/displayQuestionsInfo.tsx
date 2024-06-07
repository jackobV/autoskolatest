"use client"
export default function DisplayQuestionsInfo({currentIndex}:{currentIndex:number}){
    return(
        <div className="hidden sm:inline">
            <div className="text-lg text-slate-700 pb-2">Výběr oblasti otázek</div>
            <div className="flex flex-col max-w-sm gap-y-2 bg-white rounded-xl overflow-hidden border cursor-default text-sm leading-relaxed text-gray-700">
                <div className={`p-2 ${currentIndex <10 ? 'bg-slate-100' : 'bg-white'}`}>Znalost pravidel provozu na pozemních komunikacích (10)</div>
                <div className={`p-2 ${currentIndex > 9 && currentIndex < 14 ? 'bg-slate-100' : 'bg-white'}`}>Znalost zásad bezpečné jízdy a ovládání vozidla (4)</div>
                <div className={`p-2 ${currentIndex > 13 && currentIndex < 17 ? 'bg-slate-100' : 'bg-white'}`}>Znalost dopravních značek, světelných a akustických signálů, výstražných světel, speciálních označení vozidel a osob, dopravních zařízení a zařízení pro provozní informace včetně náležitého chování řidiče, jež odpovídá jejich významu (3)</div>
                <div className={`p-2 ${currentIndex > 16 && currentIndex < 20 ? 'bg-slate-100' : 'bg-white'}`}>Schopnost řešení dopravních situací (3)</div>
                <div className={`p-2 ${currentIndex > 19 && currentIndex < 22 ? 'bg-slate-100' : 'bg-white'}`}>Znalost předpisů o podmínkách provozu vozidel na pozemních komunikacích (2)</div>
                <div className={`p-2 ${currentIndex > 21 && currentIndex < 24 ? 'bg-slate-100' : 'bg-white'}`}>Znalost předpisů souvisejících s provozen na pozemních komunikacích (2)</div>
                <div className={`p-2 ${currentIndex === 24 ? 'bg-slate-100' : 'bg-white'}`}>Znalost zdravotnické přípravy (1)</div>
            </div>
        </div>

    )
}