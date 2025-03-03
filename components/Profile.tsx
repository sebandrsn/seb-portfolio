import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/me.jpg"
          alt="Sebastian"
          width={350}
          height={1}
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
