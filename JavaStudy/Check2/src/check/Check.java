package check;

import constants.Constants;

public class Check {
	private static String firstName = "日並";
	private static String lastName = "真野";
	public static String getFirstName() {
		return firstName;
	}
	public static String getLastName() {
		return lastName;
	}
    public static void printName(){
    	System.out.println("printNameメソッド → " + firstName + lastName);
    }
	
    
	
	public static void main(String[] args) {
		Check.printName();
		Pet pet = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);
		pet.introduce();
	    RobotPet robotPet = new RobotPet(Constants.CHECK_CLASS_R2D2, Constants.CHECK_CLASS_LUKE);
	    robotPet.introduce();
		}
		// TODO 自動生成されたメソッド・スタブ
	}
