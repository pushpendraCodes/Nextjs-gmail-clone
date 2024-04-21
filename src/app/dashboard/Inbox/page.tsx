import ListingPage from '@/components/ui/ListingPage'
import React, { useState } from 'react'

const page = () => {
    const [mailId, setMailId] = useState<string>("");
  return (
    <div>
<ListingPage setMailId={setMailId} />

    </div>
  )
}

export default page