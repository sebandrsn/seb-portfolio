import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-4">
        <Image
          src="/images/me.jpg"
          alt="Sebastian Andersson wearing a hat, sunglasses, and has a frozen mustache."
          width={350}
          height={467}
          className="h-auto max-w-[80%] rounded-2xl md:max-w-[50%] lg:max-w-[350px]"
        />
        <div>
          <h2 className="text-xl font-bold">Sebastian Andersson</h2>
          <p className="text-gray-600">Full-Stack Developer</p>
          <p className="text-gray-600">Based in Östersund, Sweden</p>
        </div>
      </div>
    </div>
  );
}
