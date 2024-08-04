#include <stdio.h>
#include <stdlib.h>

//Function to modify a student's marks(pass by reference)
void updateMarks(int *marks) {
    printf("Inside updateMarks function before change: %d\n", *marks);
    *marks += 10;
    printf("Inside updateMarks function after change: %d\n", *marks);
}

//Function to calculate the average marks(pass by value)
float calculateAverageMarks(int marksArray[], int size){
    int total =0;
    for(int i=0; i < size; i++){
        total += marksArray[i];
    }
    return (float)total/ size;
}

//Main function to test the parameter passing
int main(){
    int studentMarks = 75;
    printf("Before calling updateMarks: %d\n", studentMarks);
    updateMarks(&studentMarks); //pass by reference
    printf("After calling updateMarks: %d\n", studentMarks);

    printf("\n");

    int marksArray[] = {70, 80, 90, 60, 85};
    int size = sizeof(marksArray)/sizeof(marksArray[0]);
    printf("Marks array: ");
    for (int i = 0;i < size; i++){
        printf("%d  ", marksArray[i]);
    }
    printf("\n");

    float averageMarks = calculateAverageMarks(marksArray, size); //pass by value
    printf("Average marks: %.2f\n", averageMarks);
    printf("\n");
    printf("Washington Mwangi - C026-01-0705/2023!\n");
    return 0;
}
