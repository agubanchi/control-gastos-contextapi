


import { useMemo, useState } from "react"

export default function BudgetForm() {
  
  const [budget, setBudget] = useState(0)
  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN (budget) || budget <= 0 ? false : true
        
    }, [budget])

    return (
    <form className="space-y-5">
<div className="flex flex-col space-y-5">
<label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
    Definir Presupuesto
</label>
</div>
<input type="number"
id="budget"
name="budget" 
value={budget}
onChange={handleChange}
className="w-full bg-white border border-gray-200 p-2"/>
    
    <input type="submit"
    value="Definir Presupuesto"
    className="bg-blue-600 hover:bg-blue-700 uppercase cursor-pointer w-full p-2 text-white font-black disabled:opacity-40" 
    disabled={!isValid}/>
    
    
    </form>
  )
}
