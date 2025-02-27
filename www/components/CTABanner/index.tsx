import { Button } from '@supabase/ui'

const CTABanner = (props: any) => {
  const { darkerBg } = props
  return (
    <div
      className={`
        py-32 grid grid-cols-12 gap-4 items-center text-center bg-dark-800 border-t dark:border-gray-600
        ${darkerBg ? 'dark:bg-dark-900' : ''} px-16
      `}
    >
      <div className="col-span-12">
        <h2 className="h2">
          <span className="text-scale-900">Build in a weekend,</span>
          <span className="text-scale-1200 dark:text-white"> scale to millions</span>
        </h2>
      </div>
      <div className="col-span-12 mt-4">
        <a href="https://app.supabase.io/">
          <Button size="medium" className="text-white">
            Start your project
          </Button>
        </a>
      </div>
    </div>
  )
}

export default CTABanner
