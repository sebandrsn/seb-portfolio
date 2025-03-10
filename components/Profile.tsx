import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-x-4 lg:flex-row">
        <Image
          src="/images/me.jpg"
          alt="Sebastian Andersson a hat, wearing sunglasses and has a frozen mustache."
          width={350}
          height={467}
          className="rounded-2xl"
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
