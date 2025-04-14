def bubble_sort(arr):
    n = len(arr)
    # 外层循环控制需要比较的轮数
    for i in range(n):
        # 内层循环控制每轮比较的次数
        # 每轮结束后，最大的数会被放到最后，所以下一轮可以少比较一次
        for j in range(0, n - i - 1):
            # 如果前面的数大于后面的数，则交换
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 测试代码
if __name__ == "__main__":
    # 测试用例1：普通数组
    test_arr1 = [64, 34, 25, 12, 22, 11, 90]
    print("原始数组:", test_arr1)
    sorted_arr1 = bubble_sort(test_arr1.copy())
    print("排序后:", sorted_arr1)
    
    # 测试用例2：已经排序的数组
    test_arr2 = [1, 2, 3, 4, 5]
    print("\n原始数组:", test_arr2)
    sorted_arr2 = bubble_sort(test_arr2.copy())
    print("排序后:", sorted_arr2)
    
    # 测试用例3：逆序数组
    test_arr3 = [5, 4, 3, 2, 1]
    print("\n原始数组:", test_arr3)
    sorted_arr3 = bubble_sort(test_arr3.copy())
    print("排序后:", sorted_arr3)
    
    # 测试用例4：包含重复元素的数组
    test_arr4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    print("\n原始数组:", test_arr4)
    sorted_arr4 = bubble_sort(test_arr4.copy())
    print("排序后:", sorted_arr4) 