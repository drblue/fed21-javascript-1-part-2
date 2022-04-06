import { useState } from 'react'

const Salary = () => {
	const [salary, setSalary] = useState(10)
	const [showSalary, setShowSalary] = useState(true)

	const changeSalary = (amount) => {
		if (salary < 5) {
			setSalary(5)
			return
		}

		setSalary(salary + amount)
	}

	return (
		<>
			<button className="btn btn-primary" onClick={() => setShowSalary(!showSalary)}>
				{showSalary ? "Hide salary" : "Show salary"}
			</button>

			{showSalary && (
				<div>
					<p>Salary per hour: {salary} &euro;</p>

					{salary < 10 && (
						<div className="alert alert-warning">You might want to get a second job?</div>
					)}

					<div className="buttons">
						<div className="mb-1">
							<button
								className="btn btn-primary btn-lg"
								onClick={ () => changeSalary(1) }
							>Raise 1 &euro; 🤑</button>

							<button
								className="btn btn-warning btn-lg"
								onClick={ () => changeSalary(-1) }
							>Decrease 1 &euro; 😢</button>
						</div>

						<div className="mb-1">
							<button
								className="btn btn-success btn-lg"
								onClick={ () => changeSalary(5) }
							>Raise 5 &euro; 🤑🤑🤑</button>

							<button
								className="btn btn-danger btn-lg"
								onClick={ () => changeSalary(-5) }
							>Decrease 5 &euro; 😢😢😢</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Salary
