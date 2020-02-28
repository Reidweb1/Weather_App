/**
 * This interface defines the app's theme. This interface can be used
 * to create different theme instances that can be switched on the fly.
 */
interface AppTheme {
	darkGrayColor: string
	blackColor: string
	lightGrayColor: string
  blueColor: string
  whiteColor: string 

	marginEight: number
  marginSixteen: number
  marginThirtyTwo: number

	fontSize16: number
  fontSize20: number
  fontSize36: number
  fontSize50: number
}

const defaultTheme: AppTheme = {
  darkGrayColor: '#495057',
	blackColor: '#0B2127',
	lightGrayColor: '#9AA0AC',
  blueColor: '#81d1e6',
  whiteColor: '#FFFFFF', 

	marginEight: 8,
  marginSixteen: 16,
  marginThirtyTwo: 16,

	fontSize16: 16,
  fontSize20: 20,
  fontSize36: 36,
  fontSize50: 50
}

export const getTheme = (): AppTheme => {
	return defaultTheme
}
