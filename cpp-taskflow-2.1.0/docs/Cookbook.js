var Cookbook =
[
    [ "C0: Project Motivation", "chapter0.html", [
      [ "The Era of Multicore", "chapter0.html#TheEraOfMulticore", null ],
      [ "Loop-level Parallelism", "chapter0.html#LoopLevelParallelism", null ],
      [ "TaskBasedParallelism Task-based Parallelism", "chapter0.html#html", null ],
      [ "Challenges of Task-based Parallel Programming", "chapter0.html#ChallengesOfTaskBasedParallelProgramming", null ],
      [ "The Project Mantra", "chapter0.html#TheProjectMantra", null ]
    ] ],
    [ "C1: Understand the Task", "chapter1.html", [
      [ "What is a Task?", "chapter1.html#WhatIsATask", null ],
      [ "Create Multiple Tasks at One Time", "chapter1.html#CreateMultipleTasksAtOneTime", null ],
      [ "Lifetime of A Task", "chapter1.html#LifetimeOfATask", null ],
      [ "Example 1: Create Multiple Dependency Graphs", "chapter1.html#C1Example1", null ],
      [ "Example 2: Modify Task Attributes", "chapter1.html#C1Example2", null ]
    ] ],
    [ "C2: Dispatch a Task Dependency Graph", "chapter2.html", [
      [ "Graph and Topology", "chapter2.html#GraphAndTopology", null ],
      [ "Blocking Execution", "chapter2.html#BlockingExecution", null ],
      [ "Non-blocking Execution", "chapter2.html#NonBlockingExecution", null ],
      [ "Wait for Topologies", "chapter2.html#WaitForTopologies", null ],
      [ "Lifetime of a Graph", "chapter2.html#LifeTimeOfAGraph", null ],
      [ "Example 1: Multiple Dispatches", "chapter2.html#Chapter2Example1", null ],
      [ "Example 2: Connect Two Dependency Graphs", "chapter2.html#Chapter2Example2", null ]
    ] ],
    [ "C3: Create a Parallel For-loop Graph", "chapter3.html", [
      [ "Range-based For-loop", "chapter3.html#RangeBasedForLoop", null ],
      [ "Partition the Workload Explicitly", "chapter3.html#PartitionTheWorkloadExplicitly", null ],
      [ "Construct the Graph Explicitly", "chapter3.html#ConstructTheGraphExplicitly", null ],
      [ "Index-based For-loop", "chapter3.html#IndexBasedForLoop", null ],
      [ "Example 1: Parallel Map", "chapter3.html#Chapter3Example1", null ],
      [ "Example 2: Pipeline a Parallel For-loop", "chapter3.html#Chapter3Example2", null ]
    ] ],
    [ "C4: Create a Parallel Reduction Graph", "chapter4.html", [
      [ "Reduce a Range of Items to a Single Result", "chapter4.html#ReduceARangeOfItemsToASingleResult", null ],
      [ "Transform and Reduce", "chapter4.html#TransformAndReduce", null ],
      [ "Example 1: Find the Min/Max Element", "chapter4.html#Chapter4Example1", null ],
      [ "Example 2: Pipeline a Reduction Graph", "chapter4.html#Chapter4Example2", null ],
      [ "Example 3: Find the Minimum L1-norm", "chapter4.html#Chapter4Example3", null ]
    ] ],
    [ "C5: Spawn Task Dependency Graphs at Runtime", "chapter5.html", [
      [ "Subflow", "chapter5.html#Subflow", null ],
      [ "Detach a Subflow", "chapter5.html#DetachASubflow", null ],
      [ "Nested Subflow", "chapter5.html#NestedSubflow", null ]
    ] ],
    [ "C6: Manage Threads and Executor", "chapter6.html", [
      [ "Master, Workers, and Executor", "chapter6.html#C6_MasterWorkersAndExecutor", null ],
      [ "Share an Executor among Taskflow Objects", "chapter6.html#C6_ShareAnExecutorAmongTaskflowObjects", null ],
      [ "Customize Your Executor Interface", "chapter6.html#C6CustomizeYourExecutorInterface", null ],
      [ "Thread Safety", "chapter6.html#C6ThreadSafety", null ],
      [ "Example 1: Impact of Over-subscription", "chapter6.html#C6Example1", null ]
    ] ],
    [ "C7: Framework (Experimental)", "chapter7.html", [
      [ "Create a Framework", "chapter7.html#C7_CreateAFramework", null ],
      [ "Execute a Framework", "chapter7.html#C7_ExecuteAFramework", null ],
      [ "Lifetime of a Framework", "chapter7.html#C7_LifeTimeOfAFramework", null ],
      [ "Create an Application Framework", "chapter7.html#C7_CreateAppicationFramework", null ],
      [ "Caveats", "chapter7.html#C7_Caveats", null ]
    ] ]
];