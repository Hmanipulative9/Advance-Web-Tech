import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class EnrollmentService {
    constructor(
        private readonly courseService: CourseService,
        @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: NotificationService, // <-- Circular Inject
    ) { }

    enrollStudent(studentName: string, courseId: string) {
        const course = this.courseService.getCourseById(courseId);

        // Trigger notification after enrollment
        const notification = this.notificationService.sendNotification(
            studentName,
            `You have been registered for course ${courseId}`,
        );

        return {
            message: 'Student enrolled successfully',
            student: studentName,
            course: course,
            notification: notification, // <-- Includes confirmation in response
        };
    }

    getEnrollments() {
        return { message: 'All enrollments fetched', data: [] };
    }
}
