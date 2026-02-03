import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/shared/CodeBlock'
import { INSTALL_COMMANDS } from '@/data/constants'

export function InstallGuide() {
  return (
    <section className="px-4 py-24 md:px-6" id="install">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Get Started"
          subtitle="Install skills in seconds with npx or clone the full repository."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Tabs defaultValue="npx" className="w-full">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="npx" className="flex-1">npx (Recommended)</TabsTrigger>
              <TabsTrigger value="clone" className="flex-1">Git Clone</TabsTrigger>
            </TabsList>

            <TabsContent value="npx">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The quickest way to install. Runs the interactive installer that lets you
                  pick individual skills or bundles.
                </p>
                <CodeBlock code={INSTALL_COMMANDS.npx} />
              </div>
            </TabsContent>

            <TabsContent value="clone">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Clone the full repository for offline access and contribution.
                </p>
                <CodeBlock code={INSTALL_COMMANDS.clone} />
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
