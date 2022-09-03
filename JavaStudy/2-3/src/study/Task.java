package study;

public class Task extends Calculator{
	public Task() {
		super();
	}
	// ① TaskクラスにCalculatorクラスを継承させなさい。

    /**
     * タスクの実行
     */
    public void doTask() {
    	Calculator calculator = new Calculator();
    	int sum1 = calculator.plus(10);
		System.out.println("plusメソッドの引数が一つの場合：" + sum1);
		int sum2 = calculator.plus(11, 19);
		System.out.println("plusメソッドの引数が二つの場合：" + sum2);
		int sum3 = calculator.plus(11, 19, 30);
		System.out.println("plusメソッドの引数が三つの場合：" + sum3);
    	
    

        // ② Calculator.javaのすべてのオーバーロードメソッド「plus」に適当な引数を与え、下記画像のよう出力されるようコーディングしなさい。
        // 尚、「どのクラスから呼び出しているか」を明確にするため、plus()には呼び出し元のキーワードを付与すること。

    }
}