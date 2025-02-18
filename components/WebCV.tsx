import { Mail, Phone, Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WebCV = () => {
  const personalInfo = {
    name: "Amar Singh",
    phone: "+91 9910229366",
    email: "gameb30232@gmail.com",
    youtube: "https://www.youtube.com/@game-effecthouse",
  }

  const stats = [
    { label: "Views", value: "6.8M+" },
    { label: "Filter Tries", value: "237K+" },
    { label: "Likes", value: "178K+" },
    { label: "Revenue", value: "$640+" },
  ]

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 print:p-0 print:space-y-4">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={personalInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <Youtube size={16} />
            <span>YouTube</span>
          </a>
        </div>
      </div>

      {/* Download PDF Button */}
      <Button onClick={() => window.print()} className="mt-4 no-print">
        Download PDF
      </Button>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 print:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl sm:text-3xl font-bold">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Section */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Highly creative and results-driven individual with a passion for online education and engaging digital
            experiences. Proven ability to captivate and educate a massive online audience, evidenced by over 6.8
            million views, Top 1% Creator status on the TikTok Effect House platform, and $640+ in revenue from digital
            product sales.
          </p>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Online Content Creator & Digital Educator</h3>
            <p className="text-gray-600">TikTok Effect House & YouTube | July 2021 - Present</p>
            <ul className="mt-2 space-y-2">
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>
                  Designed and launched highly successful AR filters for TikTok using Effect House, achieving over 6.8M
                  views.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>
                  Generated $640+ in revenue from 50+ sales of digital products through platforms like Gumroad.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Minecraft Community Leader & Server Administrator</h3>
            <p className="text-gray-600">TsukimiDayfuku Minecraft Server | July 2023 - Present</p>
            <ul className="mt-2 space-y-2">
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Managed an active Minecraft server community of 10+ regular members.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Provided guidance and mentorship to players of diverse linguistic backgrounds.</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Digital Content Creation</h4>
              <p className="text-gray-700">
                Expertise in creating viral digital content, online tutorials, and instruction.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">TikTok Effect House</h4>
              <p className="text-gray-700">Proficient in AR filter design and development.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Minecraft Expertise</h4>
              <p className="text-gray-700">Server management, building, and community engagement.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Technical Skills</h4>
              <p className="text-gray-700">Effect House, YouTube, Gumroad, Discord, Server Administration.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="card">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold">Ryan International School Faridabad</h3>
          <p className="text-gray-600">Completed 12th Grade | 2015</p>
          <p className="mt-2 text-gray-700">
            Achieved high grades in 12th grade, demonstrating a strong academic foundation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default WebCV

