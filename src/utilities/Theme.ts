/**
 * This interface defines the app's theme. This interface can be used
 * to create different theme instances that can be switched on the fly.
 */
interface AppTheme {
	blackColor: string
  blueColor: string
  whiteColor: string 

	marginEight: number
  marginSixteen: number
  marginThirtyTwo: number
  marginFiftySix: number

  fontSize20: number
  fontSize36: number
  fontSize50: number
}

const defaultTheme: AppTheme = {
	blackColor: '#0B2127',
  blueColor: '#81d1e6',
  whiteColor: '#FFFFFF', 

	marginEight: 8,
  marginSixteen: 16,
  marginThirtyTwo: 32,
  marginFiftySix: 56,

  fontSize20: 20,
  fontSize36: 36,
  fontSize50: 50
}

export const getTheme = (): AppTheme => {
	return defaultTheme
}
