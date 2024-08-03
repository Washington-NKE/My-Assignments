#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(){
    int marks;
    bool hasPassed;

    printf("Enter student marks: ");
    scanf("%d", &marks);

    if (marks>=50){
        hasPassed = true;
    }else{
        hasPassed = false;
    }

    printf("Student marks: %d\n", marks);
    printf("Has the student passed? %s\n", hasPassed ? "Yes" : "No");

    printf("By Washington - C026-01-0705/2023");
    return 0;
}
