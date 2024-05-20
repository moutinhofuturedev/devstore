import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NEXT_APP_IMAGE_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_COMPANY_NAME: z.string(),
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    NEXT_APP_IMAGE_URL: process.env.NEXT_APP_IMAGE_URL,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
