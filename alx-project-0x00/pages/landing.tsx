import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
    // This is the landing page component
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
       // <Card />
        // <Button 
            title="Get Started"
            style="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full"
        />
      </div>
    )
  }
  export default Landing