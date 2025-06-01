import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
    // This is the landing page component
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Card />
        <Card />
        <Card />
         <Button 
            title="Small Rounded-sm"
            style="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-sm"
        />
        <Button 
            title="Medium Rounded-md"
            style="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-md"
        />
        <Button 
            title="large Rounded-lg"
            style="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-lg"/>
            <Button 
            title="large Rounded-full"
            style="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full"
           />
      </div>
    )
  }
  export default Landing